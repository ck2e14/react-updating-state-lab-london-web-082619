import React from 'react';

export default class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }
    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleClick}>Change Bitrate</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Resolution Change</button>
            </div>
            )
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }



    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }) 
        console.log(this.state)
    }
}
