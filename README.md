# Desafio IATECAM 

Projeto controle de estoque de produtos - FullStack 


## Cloando o projeto

```sh
    git clone git@github.com:Anthony07M/desafio-iatecam.git
```

# Instalando dependências da API
```sh
    cd desafio-iatecam-api
```

Criando ambiente virtual
```sh
    python -m venv venv
```

Instalando depedências
```sh
    pip install -r requirements.txt
```

Subindo serviço de banco de dados - DOCKER
```sh
    docker-compose up
```
Navengando para a pasta `app`
```sh
    cd app
```

Subindo o serviço
```sh
    uvicorn main:app
```
Para este exemplo use a seguinte url para o Docker local

```sh
DATABASE_URL="postgresql://admin:1234@localhost:5432/estoque" 
```
Documentação
```sh
    http://127.0.0.1:8000/docs/
```



# Instalando dependências do front-end
```sh
    desafio-iatecam-front-v2
```
```sh
    yarn install
```

Subindo o serviço
```sh
    ng serve
```

```sh
    http://localhost:4200/
```


# Melhorias futuras no projeto
## Front-end
- [ ] Cobertura de teste unitários.
- [ ] Usar biblioteca PrimeNG para estilização.
- [ ] Criar componentes mais genéricos para serem reutilizados

## Back-end
- [ ] Cobertura de teste com pytest.
- [ ] Validação de erros.
- [ ] Usar Alembic para migração de banco de dados.

#
# Considerações
<p>
    Foi um desafio muito bom, a pesar de nunca ter tido contato com `Angular` e `FastApi` pude aprender bastante coisa no decorrer desses 7 dias. Infelizmente não pude fazer uma cobertura de teste em ambos projetos porém em breve estarei subindo uma branch com os testes. 
</p>
<p>
    Falando sobre <strong>FastAPI</strong> é um framework simplesmente incrível, quando o vi documentando a api fiquei simplesmente encantando, um framework simples de usar e uma documentação excelente.
</p>
<p>
    Sobre <strong>Angular</strong> é um framework espetacular, tem uma CLI incrível que ajuda muito na produtividade. No começo tive um pouco de dificuldade porém como uso  <strong>Nestjs</strong> em meus projetos não demorei muito para entender a arquitetura.
</p>
