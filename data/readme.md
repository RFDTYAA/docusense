# Dataset

Dataset yang digunakan dalam proyek DocuSense berasal dari Cornell University arXiv Dataset yang tersedia di Kaggle.

Dataset Source:
https://www.kaggle.com/datasets/Cornell-University/arxiv

## Selected Categories

Untuk mendukung sistem Semantic Search pada domain Artificial Intelligence dan Computer Science, dataset difilter pada kategori berikut:

* cs.AI (Artificial Intelligence)
* cs.LG (Machine Learning)
* stat.ML (Machine Learning Statistics)
* cs.CL (Computation and Language)
* cs.IR (Information Retrieval)
* cs.CV (Computer Vision)
* cs.NE (Neural and Evolutionary Computing)

## Preprocessing

Tahapan preprocessing meliputi:

1. Filtering kategori penelitian.
2. Filtering tahun publikasi.
3. Penghapusan data yang tidak lengkap.
4. Penggabungan title dan abstract menjadi satu field text.

## Embedding

Dokumen kemudian dikonversi menjadi dense vector menggunakan model:

BAAI/bge-base-en-v1.5

Output embedding memiliki dimensi 768 dan digunakan untuk proses Semantic Search, Vector Retrieval, serta Cross Encoder Reranking pada sistem DocuSense.
