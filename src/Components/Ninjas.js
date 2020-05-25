import React from 'react'

class Ninjas extends React.Component {


  render() {
    let { viewNinja, deleteNinja } = this.props

    let individualNinja = viewNinja.map((ninja) => {
      if (ninja.age > 2) {
        return (
          <div className="ninjaInfo" key={ninja.id}>
            <h5>{ninja.name}</h5>
            <h5>{ninja.age}</h5>
            <h5>{ninja.belt}</h5>
            <button onClick={() => { deleteNinja(ninja.id)}}>Delete Ninja</button>
            <br />
          </div>
        );
      }
      // else if( ninja.age <= 25){
      //   return (
      //     <div className="ninjaInfo" key={ninja.id}>
      //       <h5>{ninja.name}</h5>
      //       <h5>{ninja.age}</h5>
      //       <h5>{ninja.belt}</h5>
      //       <br />
      //     </div>
      //   )
      // }
      else {
        return null
      }

    })


    return (
      <div className="Ninjas">
        {individualNinja}
      </div>
    );
  }
}

export default Ninjas