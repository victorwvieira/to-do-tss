export interface Card {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

export interface CardContent {
  titulo: string;
  conteudo: string;
}

export interface MoveCard {
  card: Card;
  direction: string;
}
