
class HtmlHelper {
    button (options = Object) {
        let onclickAction = ``;
        if ('undefined' !== typeof options.onclickFunction) {
            onclickAction = `onclick="${options.onclickFunction}('${options.type}', '${options.subtype}')"`;
        }
        return `
            <button
                id="${options.id}"
                class="${options.class}"
                data-type="${options.type}"
                data-subtype="${options.subtype}"
                ${onclickAction}
            >
                ${options.name}
            </button>
        `;
    };
    list (array, type='ul') {
        let list = '';
        if ('ol' === type) {
            list += '<ol>';
        } else {
            list += '<ul>';
        }
        for (let k in array) {
            list += '<li>' + array[k] + '</li>';
        }
        if ('ol' === type) {
            list += '</ol>';
        } else {
            list += '</ul>';
        }

        return list;
    }
}

const htmlHelper = new HtmlHelper;

export default htmlHelper;