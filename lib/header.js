const Component = require('./component');
const { formatDate } = require('./date');

class Header extends Component {
    constructor(cliInstance) {
        super();
        this.cliInstance = cliInstance;
    }

    render() {
        const title = this.cliInstance ? this.cliInstance.title : 'Todo Today';
        return `<header class="header"><h2>${title}</h2><p>${formatDate(
            new Date()
        )}</p></header>`;
    }
}

module.exports = Header;