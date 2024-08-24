from read_text_from_pdf import docs
import os
from langchain_chroma import Chroma # type: ignore
from langchain_openai import OpenAIEmbeddings    # type: ignore
from langchain_text_splitters import RecursiveCharacterTextSplitter  # type: ignore
from langchain_openai import ChatOpenAI  # type: ignore
from langchain.schema import Document #type: ignore
from langchain.chains import RetrievalQA # type: ignore
from dotenv import load_dotenv


load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')


# print(docs)
llm = ChatOpenAI(model="gpt-4o")

text_splitter = RecursiveCharacterTextSplitter(chunk_size=30, chunk_overlap=15)
splits = text_splitter.split_documents(docs)




vectorstore = Chroma.from_documents(documents=splits, embedding=OpenAIEmbeddings())
retriever = vectorstore.as_retriever()


qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever
    )


# to get ans from created rag_chain
def answer(query):
    result = qa_chain.invoke(query)
    content = result['result']
    return content
