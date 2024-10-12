---
title: Ch01 Chainlit
date: 2024-07-04
tags:
 - LLMs
categories:
 - LLMs

---



# Chainlit(UI for chat LLM)

ref: https://github.com/Chainlit/chainlit



```python
pip install chainlit

chainlit --help # Auto create a config file 

chainlit hello # create a welcome page
```



1. Create  a app.py in the project

2. ```python
   chainlit run app.py -w # hot loading
   ```

3. Call the model

   1. URL + access token
   2. Deploy locally



Check my skeleton repo here: 