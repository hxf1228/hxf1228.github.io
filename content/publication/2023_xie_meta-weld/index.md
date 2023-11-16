---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Metric-Based Meta-Learning for Cross-Domain Few-Shot Identification of Welding Defect"
authors:
- Tingli Xie
- huangxf
- Seung-Kyum Choi
author_notes:
- ""
- ""
- "Corresponding author"
date: 2023-06-01T21:14:30+08:00
doi: "10.1115/1.4056219"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-11-16T21:14:30+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Journal of Computing and Information Science in Engineering, 23(3)*, 030902 "
publication_short: "*J. Comput. Inf. Sci. Eng., 23(3)*, 030902"

abstract: "With the development of deep learning and information technologies, intelligent welding systems have been further developed, which achieve satisfactory identification of defective welds. However, the lack of labeled samples and complex working conditions can hinder the improvement of identification models. This paper explores a novel method based on metric-based meta-learning for the classification of welding defects with cross-domain few-shot (CDFS) problems. First, an embedding module using convolutional neural network (CNN) is applied to perform feature extraction and generate prototypes. The embedding module only contains one input layer, multiple convolutions, max-pooling operators, and batch normalization layers, which has the advantages of low computational cost and high generalization of images. Then the prototypical module using a prototypical network (PN) is proposed to reduce the influence of domain-shift caused by different materials or measurements using the representations in embedding space, which can improve the performance of few-shot welding defects identification. The proposed approach is verified on real welding defects under different welding conditions from the Camera-Welds dataset. For the K-shot classification on different tasks, the proposed method achieves the highest average testing accuracy compared to the existing methods. The results show the proposed method outperforms the model-based meta-learning (MAML) and transfer-learning method."

# Summary. An optional shortened abstract.
summary: "This paper explores a novel method based on metric-based meta-learning for the classification of welding defects with cross-domain few-shot (CDFS) problems."

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
