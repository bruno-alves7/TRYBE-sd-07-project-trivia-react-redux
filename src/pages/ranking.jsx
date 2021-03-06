import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeButton from '../components/HomeButton';

// const playerMock = [
//   { name: 'Joel', score: 5, picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
//   { name: 'Killer', score: 10, picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
//   { name: 'Golimar', score: 8, picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
//   { name: 'Supla', score: 1, picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
// ];
class Ranking extends Component {
  render() {
    const { allplayer } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {allplayer.map((score) => score)
          .sort((b, a) => a.score - b.score)
          .map((player, index) => (
            <div key={ index }>
              <img src={ player.picture } alt="player-pic" />
              <p data-testid={ `player-name-${index}` }>{player.name}</p>
              <p data-testid={ `player-score-${index}` }>{player.score}</p>
            </div>
          ))}
        <HomeButton />
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  allplayer: state.allplayer,
});

Ranking.propTypes = {
  allplayer: PropTypes.shape(PropTypes.string).isRequired,
};
export default connect(mapDispatchToProps)(Ranking);
