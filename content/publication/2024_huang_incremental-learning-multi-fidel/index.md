---
title: "Incremental learning with multi-fidelity information fusion for digital twin-driven bearing fault diagnosis"
authors:
- Xufeng Huang
- Tingli Xie
- Shuyang Luo
- Jinhong Wu
- Rongmin Luo
- Qi Zhou
author_notes:
- ""
- ""
- ""
- ""
- ""
- "Corresponding author"
date: 2024-01-01T00:00:00+08:00
doi: "10.1016/j.engappai.2024.108212"

publishDate: 2026-11-10T00:00:00+08:00

publication_types: ["2"]

publication: "*Engineering Applications of Artificial Intelligence, 133*, 108212"
publication_short: "*Engineering Applications of Artificial Intelligence, 133*, 108212"

abstract: "Digital twin (DT)-driven intelligent fault diagnosis (IFD) has been a hot topic, which can support personalized monitoring of critical machinery. A central challenge is that diagnostic models using deep learning (DL) suffer from the problem of catastrophic forgetting if personalized faults occur in dynamic environments. To deal with this issue, this article presents a class-incremental learning method with multi-fidelity information fusion (MFIF-CIL) for the continuous diagnosis of key faults in rolling bearings. First, an effective bearing DT model is constructed to generate enough low-fidelity (LF) simulation data. Second, feature boosting is developed to fit the residuals with distribution drifts between old classes and new classes, which helps prevent the problem of catastrophic forgetting. Last, the MFIF module is proposed for multi-fidelity knowledge transfer and fusion to leverage LF simulation data to improve the class-incremental learning ability of feature boosting with limited high-fidelity (HF) physical data. The testing datasets consisting of the measured signals are utilized as testing datasets of optimal incremental neural networks for fault diagnosis. The proposed MFIF-CIL-1 (using 15 HF data and 100 LF data as exemplars) and MFIF-CIL-2 (using 20 HF data and 100 LF data as exemplars) obtain the average diagnostic accuracies of 96.87% and 98.10%, respectively. The MFIF-CIL-2 only uses 41.93% of the training time required by the joint training method. These satisfying results demonstrate that the MFIF-CIL can effectively diagnose different health conditions over time and provide a tradeoff between relatively low experimental costs and high accuracy."

summary: "Digital twin (DT)-driven intelligent fault diagnosis (IFD) has been a hot topic, which can support personalized monitoring of critical machinery. A central challenge is that diagnostic models using deep learning (DL) suffer from the problem of catastrophic forgetting if personalized faults occur in dynamic environments."

tags: []
categories: []
featured: false

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

image:
  caption: ""
  focal_point: ""
  preview_only: false

projects: []

slides: ""
---

{{% callout note %}}

Click the **Cite** button above to cite the original paper with the BibTex entry.

Click the **DOI** button above to get the paper.

{{% /callout %}}
