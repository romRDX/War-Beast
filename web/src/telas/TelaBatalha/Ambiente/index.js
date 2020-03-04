import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

import PlayerCard from './components/PlayerCard';
import PlayerModel from './components/PlayerModel';
import EnemyModel from './components/EnemyModel';
import BottomMenu from './components/BottomMenu';


const Ambiente = (props) => {

    return (
        <Container>
            <PlayerCard />
            <PlayerModel />
            <EnemyModel />
            <BottomMenu />
        </Container>
    )

}

export default connect( state => ({ stage: state.activeStage }))(Ambiente);