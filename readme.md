# DocuSense

Semantic Search Engine Berbasis Transformer untuk Optimasi Pencarian Literatur Akademik

![Status](https://img.shields.io/badge/Status-Capstone%20Project-blue)
![Python](https://img.shields.io/badge/Python-3.10+-yellow)
![FAISS](https://img.shields.io/badge/FAISS-Vector%20Search-green)
![Transformer](https://img.shields.io/badge/BGE-v1.5-orange)

---

## Tentang Proyek

DocuSense merupakan platform Semantic Search berbasis Artificial Intelligence yang dirancang untuk membantu mahasiswa, dosen, peneliti, dan akademisi menemukan literatur ilmiah secara lebih cepat, akurat, dan relevan.

Berbeda dengan mesin pencari konvensional yang hanya mengandalkan pencocokan kata kunci, DocuSense memanfaatkan Transformer Embedding, Vector Search, dan Cross Encoder Reranking untuk memahami konteks dan makna dari query pengguna.

---

## Permasalahan

Pertumbuhan publikasi ilmiah yang sangat cepat menyebabkan proses pencarian referensi menjadi semakin kompleks. Sistem pencarian berbasis keyword sering kali menghasilkan banyak dokumen yang kurang relevan karena belum mampu memahami konteks dan hubungan makna antar istilah.

DocuSense dikembangkan untuk membantu pengguna menemukan literatur yang lebih sesuai dengan kebutuhan penelitian melalui pendekatan Semantic Search.

---

## Fitur Utama

* Semantic Search berbasis Transformer
* Vector Similarity Search menggunakan FAISS
* Cross Encoder Reranking
* Retrieval dokumen akademik berbasis konteks
* Dukungan pencarian Natural Language Query
* Fokus pada domain Artificial Intelligence dan Machine Learning

---

## Team PJK-GM070

| Nama                        | Role                      |
| --------------------------- | ------------------------- |
| Muhammad Mishbahul Muflihin | Machine Learning Engineer |
| Jauhan Ahmad                | Data Engineer             |
| Nero Caesar Suprobo         | Project Manager & QA      |
| Raffa Arvel Nafi'Nadindra   | Cloud & Database Engineer |
| Muhammad Rafi Aditya        | Frontend Engineer         |

---

## Dataset

Dataset yang digunakan berasal dari Cornell University arXiv Dataset.

Dataset Source:

https://www.kaggle.com/datasets/Cornell-University/arxiv

Kategori yang digunakan:

* cs.AI
* cs.LG
* stat.ML
* cs.CL
* cs.IR
* cs.CV
* cs.NE

Total dokumen yang digunakan setelah proses filtering mencapai lebih dari 300.000 paper akademik.

---

## Arsitektur Sistem

### Offline Pipeline (Data Preparation)

```text
arXiv Dataset
      ↓
Category Filtering
      ↓
Data Cleaning
      ↓
Title + Abstract Merging
      ↓
BGE Base v1.5 Embedding
      ↓
FAISS Index Construction
      ↓
Vector Database Ready
```

### Online Pipeline (Semantic Search)

```text
User Query
      ↓
Query Embedding
      ↓
FAISS Similarity Search
      ↓
Top-K Retrieval
      ↓
Cross Encoder Reranking
      ↓
Final Search Results
```

---

## Technology Stack

### Machine Learning

* BAAI/bge-base-en-v1.5
* Sentence Transformers
* HuggingFace Transformers
* PyTorch

### Retrieval

* FAISS
* Vector Similarity Search
* Cross Encoder Reranking

### Data Processing

* Pandas
* NumPy
* Scikit-Learn

### Development

* Python
* Jupyter Notebook
* Kaggle Notebook
* GitHub


---

## Instalasi

Clone repository:

```bash
git clone https://github.com/RFDTYAA/docusense.git
```

Masuk ke folder project:

```bash
cd DocuSense
```

Install dependency:

```bash
pip install -r requirements.txt
```

---

## Menjalankan Proyek

1. Download dataset arXiv dari Kaggle.
2. Jalankan notebook preprocessing.
3. Generate embedding menggunakan BGE Base v1.5.
4. Bangun FAISS Index.
5. Jalankan pipeline semantic search.
6. Lakukan pengujian query.

---

## Evaluasi

Evaluasi dilakukan menggunakan metrik Information Retrieval untuk mengukur kualitas hasil pencarian dan efektivitas proses reranking.

Metrik yang digunakan:

* Precision@10
* Recall@10
* Mean Reciprocal Rank (MRR)
* NDCG@10
* Search Latency

---

## Dampak dan Manfaat

DocuSense membantu mahasiswa dan peneliti menemukan referensi akademik yang lebih relevan dengan waktu pencarian yang lebih efisien. Sistem ini mendukung eksplorasi literatur ilmiah berbasis konteks sehingga proses penelitian dapat dilakukan secara lebih efektif.

---

## Dokumentasi

Repository ini berisi:

* Dataset Information
* Notebook Eksperimen
* Pipeline Semantic Search
* Dokumentasi Proyek
* Panduan Replikasi Sistem

---

## Capstone Project

Project ini dikembangkan sebagai bagian dari:

Pijak in collaboration with IBM SkillsBuild

Capstone Project Team PJK-GM070
