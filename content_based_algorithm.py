import pandas as pd   
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from mlflow.pyfunc import PythonModel
from mlflow import mlflow, pyfunc

raw_articles_data = pd.read_csv('/home/seema/Documents/projects/algorithms/datasets/articles1.csv', low_memory=False)  

#remove all the nan values from data
raw_articles_data = raw_articles_data.replace('',np.nan)
raw_articles_data = raw_articles_data.dropna(axis="columns", how="any")

articles_data_copy = raw_articles_data.copy()

stopwords = ['covid19','coronavirus','virus','corona','covid','pandemic', 'outbreak',
'19','disease','covid2021', 'covid2019','covidvirus', 'articles','article']

data_vectors = CountVectorizer(analyzer='word', ngram_range=(1,1), stop_words=stopwords)  
data_matrix=data_vectors.fit_transform(raw_articles_data['Title'])     

def article_recommender(input_df, word_vectorizer=data_vectors,  data_matrix = data_matrix, articles_data_copy=articles_data_copy):
    
    input_df['bag_of_words'] = input_df.apply(lambda x: ' '.join(x), axis = 1)
    
    # vectorize the inputted string
    inputted_vector = word_vectorizer.transform(input_df['bag_of_words'])
    
    # calculate cosine similarity with existing matrix
    one_dimension_cosine_sim = cosine_similarity(inputted_vector, data_matrix)

    # creating a Series with the similarity scores in descending order
    score_series = pd.Series(one_dimension_cosine_sim[0]).sort_values(ascending = False)
    
    # only show matches that have some similarity
    score_series = score_series[score_series>0]

    # getting the indexes of the 5 most similar articles
    top_5_indexes = list(score_series.iloc[1:6].index)
    
    # initializing the empty list of recommended repo
    
    recommended_articles = articles_data_copy.loc[top_5_indexes]
        
    return recommended_articles                            


class covidArticleRecommender(PythonModel):
   
    ## defining objects needed for leadsModel prediction. 
    def __init__(self,
                 data_vectors,
                 data_matrix,
                 articles_data_copy,
                 article_recommender):
        
        ## Setting up all needed objects
        self.data_vectors = data_vectors
        self.data_matrix = data_matrix
        self.articles_data_copy = articles_data_copy
        self.article_recommender = article_recommender
    
    ## define function with processing and feeding data into prediction at the end
    def predict(self,context,model_input):
        output_df = self.article_recommender(model_input)
        return [output_df.to_dict('records')]
        
m = covidArticleRecommender(data_vectors = data_vectors,
                                       data_matrix = data_matrix,
                                       articles_data_copy = articles_data_copy,
                                       article_recommender = article_recommender)
model_input = pd.DataFrame([["Convalescent", "Microbiota"]])
model_output = m.predict(None,model_input)
print(model_output)
