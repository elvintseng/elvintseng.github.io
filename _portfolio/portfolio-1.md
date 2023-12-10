---
title: <h1 class="ieee-heading">Security in Machine Learning</h1>
# <h1 class="ieee-title">Security in Machine Learning</h1>
# excerpt: "Short description of portfolio item number 1<br/><img src='/images/500x300.png'>"
collection: portfolio
---

Data/Information security and privacy are increasingly important as ML methods become more powerful. Federated Learning (FL) serves as a method for protecting data security and privacy by *keeping data localized*.
<br><img src='/images/FL.png' width="450" height="450" style="float:right">
<br>For FL algorithm efficiency, the Alternating Direction Method of Multipliers (ADMM) is a commonly used distributed/consensus optimization method. Despite the data availability, FL also faces the following issues:
<ul><li> Data distribution across clients: if data is distributed non-identically across nodes, it could negatively impact model convergence</li>
<li>Privacy in model transmission: membership inference attacks, model inversion attacks</li>
<li>Security in training: data poisoning attacks, Byzantine attacks, backdoor attacks</li> </ul>
Fortunately, ADMM provides both a convergence guarantee and a theoretical backbone for handling non-i.i.d. data. We work on FL schemes specifically to address these malicious attacks.