import $ from 'jquery';
import { navCollapse } from './elements/navbar';
import { tabsGest } from './elements/tabs';
import { toolTips } from './elements/tooltip';
import { modals } from './elements/modal';

$(document).ready(function() {
    navCollapse();
    tabsGest();
    toolTips();
    modals();
});
