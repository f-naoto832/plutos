import { CardStructure } from './store';
import Vue from 'vue';
import Vuex from 'vuex';
import Card from './components/Card.vue';

Vue.use(Vuex);

export enum Player {
  player1,
  player2,
}

export enum Scene {
  preparing,
  playing,
  finish,
}

export enum CardOrientation {
  front,
  back,
}
export interface CardStructure {
  number: number;
  orientation: CardOrientation;
}

export default new Vuex.Store({
  state: {
    personalCardsFieldOfPlayer1: null,
    personalCardsFieldOfPlayer2: null,
    commonCardsField: Array<CardStructure>(),
    gainCardsFieldOfPlayer1: null,
    gainCardsFieldOfPlayer2: null,
    gainCardsOfPlayer1: [new Card()],
    gainCardsOfPlayer2: [new Card()],
    turnPlayer: Player.player1,
    turnCount: 0,
    openedCards: 0,
    isPrivilegeAvailable: true,
    scene: Scene.preparing,
  },
  mutations: {
    initCommonCardsField(state) {
      // こういう値はどこかでconfigファイルとかに移したい
      const numberOfCard = 10;

      for (let i = 1; i < numberOfCard + 1; i++) {
        const newCard: CardStructure = {
          number: i,
          orientation: CardOrientation.front,
        };
        state.commonCardsField.push(newCard);
      }
    },
    increment(state) {
      // ここで状態を更新する
      // state.xxx = yyy;
      const a = 1;
    },
    incrementTurnCount(state) {
      state.turnCount++;
    },
    incrementGainCardsOfPlayer1(state) {
      const newCard = new Card({ propsData: {
        number: 4,
        orientation: CardOrientation.front,
      }});
      state.gainCardsOfPlayer1.push(newCard);
    },
  },
  actions: {

  },
});
