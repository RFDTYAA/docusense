from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]
DATA_DIR = BASE_DIR / "data"

PAPERS_CSV_PATH = DATA_DIR / "papers.csv"
FAISS_INDEX_PATH = DATA_DIR / "faiss_index.index"
DATASET_SUMMARY_PATH = DATA_DIR / "dataset_summary.json"

LOCAL_BGE_MODEL_PATH = DATA_DIR / "bge_model"

if LOCAL_BGE_MODEL_PATH.exists():
    MODEL_NAME = str(LOCAL_BGE_MODEL_PATH)
else:
    MODEL_NAME = "BAAI/bge-base-en-v1.5"