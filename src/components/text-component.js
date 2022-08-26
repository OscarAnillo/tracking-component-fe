import 'animate.css';

export default function TextComponent(){
    return (
        <div className="text animate__animated animate__fadeIn">
            <p><span>new</span> Monograph Dashboard</p>
            <h1>powerful insights into your team</h1>
            <p className="para">Project planning and time tracking for agile teams</p>
            <div className="text-row">
                <div>
                    <button>Schedule a demo</button>
                </div>
                <div>
                    <button className="second-btn">To see a preview</button>
                </div>
            </div>
        </div>
    )
}