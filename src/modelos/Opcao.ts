class Opcao {
    id: number
    imagem: string
    titulo: string
    descricao: string
    nota: number
    tags: string[]

    constructor(
        id_: number,
        imagem_: string,
        titulo_: string,
        descricao_: string,
        nota_: number,
        tags_: string[],
    ) {
        this.id = id_
        this.imagem = imagem_
        this.titulo = titulo_
        this.descricao = descricao_
        this.nota = nota_
        this.tags = tags_
    }
}

export default Opcao