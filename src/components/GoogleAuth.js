import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clienteId: '39880040457-ilkrvarhlno6v006bk72ekcp7716lnlj.apps.googleusercontent.com',
        scope: 'email'        
      })
    });
  }

  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;