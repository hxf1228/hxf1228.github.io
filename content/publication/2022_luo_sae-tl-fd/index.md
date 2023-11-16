---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Transfer learning based on improved stacked autoencoder for bearing fault diagnosis"
authors:
- Shuyang Luo
- huangxf
- Yanzhi Wang
- Rongmin Luo
- Qi Zhou
author_notes:
- ""
- ""
- ""
- ""
- "Corresponding author"
date: 2022-11-28T00:00:00+08:00
doi: "10.1016/j.knosys.2022.109846"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-11-16T00:00:00+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Knowledge-Based Systems, 256*, 109846"
publication_short: "*Knowl.-Based Syst., 256*, 109846"

abstract: "Deep transfer learning algorithm is regarded as a promising method to address the issue of rolling bearing fault diagnosis with limited labeled data. Stacked autoencoder (SAE) has been widely employed in deep transfer learning research since it is a semi-supervised algorithm. However, there are still some limitations for the transfer learning based on SAE, including the vanishing gradient problem caused by the sigmoid activation function in SAE, and low accuracy under the condition of cross-domain or limited labeled training data. In this work, an improved SAE based on convolutional shortcuts and domain fusion strategy (ISAE-CSDF) is proposed for fault diagnosis of rolling bearing. The sparse term Kullback–Leibler (KL) divergence in the original SAE is replaced with the convolutional shortcuts to prevent vanishing gradient problem and improve the feature extraction ability. The domain fusion strategy can transfer commonly shared feature information from various domains. The feasibility of ISAE-CSDF is validated on two publicly available bearing datasets and a custom-built experiment device. Results show that ISAE-CSDF outperforms the state-of-art methods in the context of different working conditions, cross-domain, and limited labeled data."

# Summary. An optional shortened abstract.
summary: "An improved SAE based on convolutional shortcuts and domain fusion strategy (ISAE-CSDF) is proposed for fault diagnosis of rolling bearing"

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
