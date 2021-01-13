import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      trivia: [],
      isLoading: false,
    };
    this.triviaApi = this.triviaApi.bind(this);
  }

  componentDidMount() {
    this.triviaApi();
  }

  trivia() {
    const { trivia } = this.state;
    console.log(trivia);
    return (
      <div>
        <div>
          <p data-testid="question-category">{trivia[0].category}</p>
          <p data-testid="question-text">{trivia[0].question}</p>
          <button
            type="button"
            data-testid="correct-answer"
          >
            {trivia[0].correct_answer}
          </button>
          {trivia[0].incorrect_answers.map((incorrect, index2) => (
            <div key={ index2 }>
              <button
                type="button"
                data-testid={ `wrong-answer-${index2}` }
              >
                {incorrect}
              </button>
            </div>
          ))}
        </div>
        ))
      </div>);
  }

  hash() {
    const { email } = this.props;
    const url = `https://www.gravatar.com/avatar/${md5(email)}`;
    return url;
  }

  triviaApi() {
    const { token } = this.props;
    const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
    fetch(url).then((response) => response.json())
      .then((json) => { this.setState({ trivia: json.results, isLoading: true }); });
  }

  render() {
    const { name, score = 0 } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <header>
          <img src={ this.hash() } alt="avatar" data-testid="header-profile-picture" />
          <h1 data-testid="header-player-name">{name}</h1>
          <p data-testid="header-score">{score}</p>
        </header>
        { isLoading ? this.trivia() : <p>Carregando</p> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.login.token,
  email: state.login.email,
  name: state.player.name,
  score: state.player.score,
});

Play.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Play);
