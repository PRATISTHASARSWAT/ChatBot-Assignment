from langchain_community.document_loaders import PyPDFLoader

file_path = "./pdfs/SC-data.pdf"

loader = PyPDFLoader(file_path)

docs= loader.load()
