# -ENGWEB2024-Normal

# Exercício 1

   ## 1.1 

        Primeiramente, como ambos os datasets estavam em formatos csv e xlsx, de forma a conseguir tratar dos dados da forma mais confortável, converti o ficheiro csv contratos2024 para um ficheiro json, com um conversor online.

        Foi alterado manualmente, usado search and replace, o atributo idcontrato, para _id.
        
        Importou-se a base de dados usando o comando:
        mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray

        Depois disto, foram então resolvidas as queries, que podem ser consultadas no ficheiro queries.txt na pasta Ex1

   ## 1.2 

        Para este passo, foi utilizado o mongosh para resolver estas queries. Isto foi feito através dos seguintes comandos, 
        após o import mencionado anteriormente.

        -> mongosh 

        -> use contratos 

        contratos> (Queries foram inseridas aqui)

        Desta maneira, as queries foram resolvidas e guardadas no ficheiro já mencionado de Output.

   ## 1.3

        Para a API, após os passos anteriores, foram então criadas as pastas controllers e models e, nestas, foram guardados o ficheiro que contém as funções auxiliares relacionadas com o contrato e o modelo do contrato em si, respetivamente. Depois disto, foram então definidas todas as funções necessárias, de forma aos pedidos à API serem possíveis.

# Exercício 2

   ## 2.1 

        Para este aqui, foram definidas as páginas necessárias para a conclusão do exercício e, depois disto, foram feitos os pedidos à API com o axios, estando ambos a funcionar ao mesmo tempo.

   ## 2.2 

        Tal como no passo anterior, esta página seguiu quase a mesma lógica que o exercício anterior.

   ## 2.3 

        Para este exercício, foi criado o método GET pelo NIPC, de forma a buscar a informação necessária à API.