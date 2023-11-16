---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Three-dimensional hybrid fusion networks for current-based bearing fault diagnosis"
authors:
- huangxf
- Tingli Xie
- Jiexiang Hu
- Qi Zhou
author_notes:
- ""
- ""
- "Corresponding author"
- ""
date: 2023-11-16T00:00:00+08:00
doi: "10.1088/1361-6501/ad099b"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-11-16T00:00:00+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Measurement Science and Technology, 35*, 025126"
publication_short: "*Meas. Sci. Technol., 35*, 025126"

abstract: "Intelligent fault diagnosis (IFD) techniques commonly use vibration-based measurements to perform health monitoring of critical rotating components in industrial systems. However, these vibration-based approaches may be limited in cost-sensitive applications, because the installation of vibration sensors is inconvenient and vibration sensors are expensive. Considering the difficulties of IFD using only current-related information from the motor current signal (MCS), this paper proposes a three-dimensional hybrid-fusion neural network (3D-HFN) that can automatically perform both data- and feature-level fusion of multi-phase current signals for MCS-based IFD of the rolling bearing. The 3D-HFN consists of the multivariate variational mode decomposition (MVMD) and an improved three-dimensional convolution neural network (3D-CNN). Firstly, MVMD is proposed to process multi-phase current signals, which adaptively acquire several intrinsic mode functions with mode-alignment properties. Subsequently, signal-to-image conversion and 3D stacking methods are used to construct 3D-like data in the current-phase dimension, which can fully preserve the interaction relationship between different phases using data-level fusion. Finally, an improved 3D-CNN with multiscale feature fusion and the smooth maximum unit is proposed to learn the 3D-like data and identify different health conditions for the rolling bearing. An open-source dataset with composite bearing faults is used to validate the merits of the proposed method. Experimental results show that the proposed approach has achieved more reliable diagnosis performance than other hand-crafted or 2D/3D-CNN-based algorithms in MCS-based IFD of the rolling bearing."

# Summary. An optional shortened abstract.
summary: "Considering the difficulties of IFD using only current-related information from the motor current signal (MCS), this paper proposes a three-dimensional hybrid-fusion neural network (3D-HFN) that can automatically perform both data- and feature-level fusion of multi-phase current signals for MCS-based IFD of the rolling bearing."

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
