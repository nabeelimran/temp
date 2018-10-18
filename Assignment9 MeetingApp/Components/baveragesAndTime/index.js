import React, { Component } from 'react'

class BaveragesAndTime extends Component {
  render() {
    return (
        <div>
            <form action="">
                <h3>Select your favourite baverages</h3>
                <span>(atleast one)</span>

                <div className="image-upload">
                    <label htmlFor="Coffee">
                    <i class="fas fa-coffee"></i>
                    <br/>
                    Coffee
                    </label>
                    <input type="checkbox" name="baverage" value="Coffee" id="Coffee"/>
                </div>

                <div className="image-upload">
                    <label htmlFor="Juice">
                    <i className="fas fa-upload fa-3x"></i>
                    <br/>
                    Juice
                    </label>
                    <input type="checkbox" name="baverage" value="Juice" id="Juice"/>
                </div>

                <div className="image-upload">
                    <label htmlFor="Cocktail">
                    <i className="fas fa-upload fa-3x"></i>
                    <br/>
                    Cocktail
                    </label>
                    <input type="checkbox" name="baverage" value="Cocktail" id="Cocktail"/> 
                </div>

                
            </form>
        </div>
    )
  }
}

export default BaveragesAndTime;

