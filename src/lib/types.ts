export interface Topico {
    id: number;
    titulo: string;
    conteudo: {
      texto: string;
      tabela?: Array<{caractere: string, romanji: string, audio: string}>;
      exemplos?: string[];
    };
  }
  
  export interface Capitulo {
    id: number;
    titulo: string;
    topicos: Topico[];
  }