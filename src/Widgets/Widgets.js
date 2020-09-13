import React from 'react'
import './Widgets.css';

function Widgets(props) {
    return (
        <div className="widgets">
            <div className="ads">
                <div className="ad">
                    <img src="https://scontent.fpnq5-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p160x160/82077411_23844038801910692_1035043434223632384_n.png.jpg?_nc_cat=111&_nc_sid=67cdda&_nc_ohc=0DUR69DJS5oAX-xTWGu&_nc_ht=scontent.fpnq5-1.fna&oh=9af7a23d5511cee4981afd0065edc538&oe=5F826288"
                        height="50" width="100" style={{borderRadius: 6}} />
                    <p>Admissions open for Msc in Organic Chemistry</p>
                </div>

                <div className="ad">
                    <img src="https://scontent.fpnq5-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p160x160/82077411_23844038801910692_1035043434223632384_n.png.jpg?_nc_cat=111&_nc_sid=67cdda&_nc_ohc=0DUR69DJS5oAX-xTWGu&_nc_ht=scontent.fpnq5-1.fna&oh=9af7a23d5511cee4981afd0065edc538&oe=5F826288"
                        height="50" width="100" style={{borderRadius: 6}} />
                    <p>Admissions open for Bsc in Physics</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets
