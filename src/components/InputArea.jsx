export default function InputArea({ onCalculate }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment:</label>
                    <input type="number" onInput={onCalculate} required />
                </p>
                <p>              
                    <label>Annual Investment:</label>
                    <input type="number" onInput={onCalculate} required /> 
                </p> 
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return:</label>
                    <input type="number" onInput={onCalculate} required />
                </p>
                <p>
                    <label>Duration:</label>
                    <input type="number" onInput={onCalculate} required />
                </p>
            </div>
        </section>
    )
}
// This component is responsible for rendering the input area of the investment calculator.