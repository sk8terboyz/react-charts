import './DropdownCardHTML.css';

const DropdownCardHTML = () => {
    // has to be declared outside of toggleHandler to prevent infinite loop
    let once = true;
    // creates a flicker when closing (need to get rid of the flicker)
    const toggleHandler = (e) => {
        let details = e.target;
        let summary = details.children[0];
        if(!details.open && once) {
            details.open = true;
            details.animate({
                height: '2em'
            }, {
                duration: 500
            })
            setTimeout(() => {
                details.open = false;
                once = false;
            }, 500);
        }
        setTimeout(() => {
            once = true;
        }, 1000);   // Must be greater than the time it closes
    }

    return (
        <div className="cardHolder">
            <details onToggle={toggleHandler}>
                <summary><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">www.youtube.com</a></summary>
                <div className='content'>
                    <ul>
                        <li>Test: Test</li>
                        <li>Test: Test</li>
                        <li>Test: Test</li>
                        <li>Test: Test</li>
                        <li>Test: Test</li>
                    </ul>
                </div>
            </details>
        </div>
    )
}

export default DropdownCardHTML;