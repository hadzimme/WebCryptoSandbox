import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    const { generateKey } = this.props
    generateKey()
  }

  render() {
    const { publicKey } = this.props
    return (
      <div>
        <h1>JSON Web Key (Public Key)</h1>
        <pre>{JSON.stringify(publicKey, null, 2)}</pre>
        <dl>
          <dt>Key Type:</dt>
          <dd>
            <pre>{publicKey.kty}</pre>
          </dd>
          <dt>Curve:</dt>
          <dd>
            <pre>{publicKey.crv}</pre>
          </dd>
          <dt>Key Operations:</dt>
          <dd>
            <pre>{publicKey.key_ops}</pre>
          </dd>
          <dt>X:</dt>
          <dd>
            <pre>{publicKey.x}</pre>
          </dd>
          <dt>Y:</dt>
          <dd>
            <pre>{publicKey.y}</pre>
          </dd>
        </dl>
      </div>
    )
  }
}

export default App
