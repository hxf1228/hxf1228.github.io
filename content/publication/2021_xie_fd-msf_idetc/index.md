---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Multi-Sensor Data Fusion for Rotating Machinery Fault Diagnosis Using Residual Convolutional Neural Network"
authors:
- Tingli Xie
- huangxf
- Seung-Kyum Choi
author_notes:
- ""
- ""
- "Corresponding author"
date: 2021-11-17T21:14:30+08:00
doi: "10.1115/DETC2021-67406"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-12-03T21:14:30+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the ASME 2021 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference. Volume 3A: 47th Design Automation Conference (DAC).*, V002T02A023"
publication_short: "*Proceedings of the ASME 2021 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference. Volume 3A: 47th Design Automation Conference (DAC).*, V002T02A023"

abstract: "Diagnosis of mechanical faults in the manufacturing systems is critical for ensuring safety and saving cost. With the development of data transmission and sensor technologies, the measuring systems can easily acquire multi-sensor and massive data. The traditional fault diagnosis methods usually depend on the features extracted by experts manually. The feature extraction process is usually time-consuming and laborious, which has a significant impact on the final results. Although Deep-Learning (DL) provides an end-to-end way to address the drawbacks of traditional methods, it is necessary to do deep research on an intelligent fault diagnosis method based on Multi-Sensor Data and Data Fusion. In this project, a novel intelligent diagnosis method based on Multi-Sensor Data Fusion and Convolutional Neural Network (CNN) is explored, which can automatically extract features from raw signals and achieve superior recognition performance. Firstly, a Multi-Signals-to-RGB-Image conversion method based on Principal Component Analysis (PCA) is applied to fuse multi-signal data into three-channel RGB images, which can eliminate the effect of handcrafted features and obtain the feature-level fused information. Then, the improved CNN with residual networks and the Leaky Rectified Linear Unit (LReLU) is defined and trained by the training samples, which can balance the relationship between computational cost and accuracy. After that, the testing data are fed into CNN to obtain the final diagnosis results. Two datasets, including the KAT bearing dataset and Gearbox dataset, are conducted to verify the effectiveness of the proposed method. The comprehensive comparison and analysis with widely used algorithms are also performed. The results demonstrate that the proposed method can detect different fault types and outperform other methods in terms of classification accuracy. For the KAT bearing dataset and Gearbox dataset, the proposed method’s average prediction accuracy is as high as 99.99% and 99.98%, which demonstrates that the proposed method achieves more reliable results than other DL-based methods."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

{{% callout note %}}

Click the **Cite** button above to cite the original paper with the BibTex entry.

Click the **DOI** button above to get the paper.

{{% /callout %}}
