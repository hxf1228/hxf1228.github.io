---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Information Fusion-Based Meta-Learning for Few-Shot Fault Diagnosis Under Different Working Conditions"
authors:
- Tingli Xie
- huangxf
- Seung-Kyum Choi
author_notes:
- ""
- ""
- "Corresponding author"
date: 2022-11-17T21:14:30+08:00
doi: "10.1115/DETC2022-90934"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-11-16T21:14:30+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the ASME 2021 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference. Volume 3A: 47th Design Automation Conference (DAC).*, V002T02A009"
publication_short: "*Proceedings of the ASME 2021 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference. Volume 3A: 47th Design Automation Conference (DAC).*, V002T02A009"

abstract: "With the development of deep learning and information technologies, intelligent fault diagnosis has been further developed, which achieves satisfactory identification of mechanical faults. However, the lack of labeled samples and complex working conditions can hinder the improvement of diagnostics models. In this article, a novel method called Information Fusion-based Meta-Learning (IFML) is explored for fault diagnosis with few-shot problems under different working conditions. Firstly, an information fusion and embedding module is applied to perform both data- and feature-level fusion of multi-source. The embedding module only contains one input layer and multiple convolutions, residual and batch normalization (BN) layers, which has the advantage of low computational cost and high generalization. Then the prototypical module is proposed to reduce the influence of domain-shift caused by different working conditions using the fusion representation, which can improve the performance of fault diagnosis. The approach is verified on artificial and real faults under 4 different working conditions from the KAt-DataCenter at Paderborn University. For the 3-way 1-shot classification on Task T1, the average testing accuracy of the proposed method is 97.14%. For the K-shot classification on different tasks, the proposed method achieves the highest average testing accuracy of 94.21%. The results show the proposed method outperforms other typical meta-learning methods in terms of testing accuracy and generalization capability."

# Summary. An optional shortened abstract.
summary: "In this article, a novel method called Information Fusion-based Meta-Learning (IFML) is explored for fault diagnosis with few-shot problems under different working conditions."

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
