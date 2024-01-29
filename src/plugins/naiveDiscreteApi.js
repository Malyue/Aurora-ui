import {NAlert} from 'naive-ui';
import * as NaiveUI from 'naive-ui';
import {h} from 'vue';


/**
 * 挂载 Naive-ui 脱离上下文的 API
 * 如果你想在 setup 外使用 useDialog、useMessage、useNotification、useLoadingBar，可以通过 createDiscreteApi 来构建对应的 API。
 * https://www.naiveui.com/zh-CN/dark/components/discrete
 */

export function initDiscrete(ctx) {
    const message = useMessage();
    window['$message'] = message;

    // if (ctx) {
    //     ctx.appContext.config.globalProperties.$message = message;
    // }
}

export function setupNaiveDiscreteApi() {
   let opts = {
       message:{
           render: (props) => {
               const {type,title} = props;
               return h (
                   NAlert,
                   {
                       closable:props.closable,
                       onClose:props.onClose,
                       type:type === 'loading' ? 'default':type,
                       title: title || null, // 如果没有传入title，使用默认值
                       style: {
                           boxShadow: "var(--n-box-shadow)",
                           maxWidth: "calc(100vw - 32px)",
                           width: "480px"
                       }
                   },
                   {
                       default: () => props.content
                   }
               );
           }
       }
   }

    const { message } = NaiveUI.createDiscreteApi(['message']);

    const {dialog,notification,loadingBar} = NaiveUI.createDiscreteApi(
       ['dialog','notification','loadingBar'],
   )

    window['$message'] = message
    window['$dialog'] = dialog
    window['$notification'] = notification
    window['$loading'] = loadingBar

}
