---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "A Transfer Learning-Based Multi-Fidelity Point-Cloud Neural Network Approach for Melt Pool Modeling in Additive Manufacturing"
authors:
- {{< hl >}}huangxf{{< /hl >}}
- Tingli Xie
- Zhuo Wang
- Lei Chen
- Qi Zhou
- Zhen Hu
author_notes:
- "Department of Industrial and Manufacturing Systems Engineering, University of Michigan-Dearborn, 2340 Heinz Prechter Engineering Complex (HPEC), Dearborn, MI 48128"
- "George W. Woodruff School of Mechanical Engineering, Georgia Institute of Technology, North Avenue, Atlanta 30332, GA"
- "Department of Mechanical Engineering, University of Michigan-Dearborn, 1320 Heinz Prechter Engineering Complex (HPEC), Dearborn, MI 48128"
- "Department of Mechanical Engineering, University of Michigan-Dearborn, 1320 Heinz Prechter Engineering Complex (HPEC), Dearborn, MI 48128"
- "Co-Corresponding author, Department of Aerospace Engineering, Huazhong University of Science and Technology, 1037 Luoyu Rd, Hongshan, Wuhan, Hubei 430074, China"
- "Corresponding author, Department of Industrial and Manufacturing Systems Engineering, University of Michigan-Dearborn, 2340 Heinz Prechter Engineering Complex (HPEC), Dearborn, MI 48128"
date: 2021-08-04T20:59:48+08:00
doi: "10.1115/1.4051749"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-08-07T20:59:48+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*ASCE-ASME Risk and Uncertainty in Engineering Systems, Part B: Mechanical Engineering, 8(1)*, 011104"
publication_short: "*ASCE-ASME J. Risk. and Uncert. in Engrg. Sys. Part B Mech. Engrg., 8(1)*, 011104"

abstract: "Melt pool modeling is critical for model-based uncertainty quantification (UQ) and quality control in metallic Additive Manufacturing (AM). Finite element (FE) simulation for thermal modeling in metal AM, however, is tedious and time-consuming. This paper presents a multi-fidelity point-cloud neural network method (MF-PointNN) for surrogate modeling of melt pool based on FE simulation data. It merges the feature representations of low-fidelity (LF) analytical model and high-fidelity (HF) FE simulation data through the theory of transfer learning (TL). A basic PointNN is firstly trained using LF data to construct correlation between the inputs and thermal field of analytical models. Then, the basic PointNN is updated and fine-tuned using the small size of HF data to build the MF-PointNN. The trained MF-PointNN allows for efficient mapping from input variables and spatial positions to thermal histories, and thereby efficiently predict the three-dimensional melt pool. Results of melt pool modeling of electron beam additive manufacturing (EBAM) of Ti-6Al-4V under uncertainty demonstrate the efficacy of the proposed approach."

# Summary. An optional shortened abstract.
summary: "This paper presents a multi-fidelity point-cloud neural network method (MF-PointNN) for surrogate modeling of melt pool based on FE simulation data."

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