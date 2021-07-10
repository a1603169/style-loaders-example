import React from 'react'
import styles from './Button.module.css'


// const Button = props => />

class Button extends React.Component {
  state = {
    loading: false,
  }
  render() {
    return (<button onClick={this.startLoading} 
      className={
        this.state.loading 
        ? `${styles['button']} ${styles["loading"]}` 
        : styles["button"] 
      } 
      {...this.props} />)
  }

  startLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000)
  }
}

export default Button;