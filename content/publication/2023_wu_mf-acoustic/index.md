---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "A deep learning-based multi-fidelity optimization method for the design of acoustic metasurface"
authors:
- Jinhong Wu
- Xingxing Feng
- Xuan Cai
- huangxf
- Qi Zhou
author_notes:
- ""
- ""
- ""
- ""
- "Corresponding author"
date: 2023-10-01T00:00:00+08:00
doi: "10.1007/s00366-022-01765-9"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-11-16T00:00:00+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Engineering with Computers, 39*, 3421–3439"
publication_short: "*Engineering with Computers, 39*, 3421–3439"

abstract: "A desirable acoustic metasurface requires the scattered acoustic field distribution uniform. Neural networks are effective substitutions to mimic the expensive FE simulations in most research. However, the computational cost required to construct a model with only single high-fidelity (HF) simulation data is still unacceptable. This paper presents a deep learning-based multi-fidelity optimization framework to improve the uniformity of the scattered acoustic field distribution. First, a multi-fidelity composite convolutional neural network (MF-CCNN) method is proposed to predict the high-dimensional scattered acoustic field at a lower data cost. The developed MF-CCNN consists of four convolutional subnets. The first part predicts a low-fidelity (LF) output, whose features are then extracted by the second part and concatenated with the inputs to predict the HF result. Two parallel branches are utilized to map the LF features to the HF output. Then, the physical parameters’ optimization neural network is proposed to minimize the objective under the prediction of MF-CCNN. The proposed method is compared with other state-of-the-art multi-fidelity networks, and the results demonstrate that MF-CCNN reaches the highest accuracy and the mean absolute error is improved by at least 20%. The variance of the obtained scattered acoustic field after optimization is reduced by 3.62%, and the time cost is only 8% of the genetic algorithm (GA), proving the efficiency and accuracy of the proposed framework."

# Summary. An optional shortened abstract.
summary: "This paper presents a deep learning-based multi-fidelity optimization framework to improve the uniformity of the scattered acoustic field distribution. "

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
