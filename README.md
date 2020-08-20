##### Dependências
- docker
- node*
- graphicsmagick*

##### Executando
Para gerar as images, basta rodar o comando

```bash
$ ./generate.sh
```

Este comando construirá a imagem Docker necessária para execução do script, caso esta
imagem já exista, ele segue com a geração das imagens.

##### Obeservações
A lib [dynamic-watermark](https://www.npmjs.com/package/dynamic-watermark) na verdade é apenas
uma abstração da interface do programa graphicsmagick.

### LAUS DEO ∴