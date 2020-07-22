function showShareSection()
{
    element = document.getElementById("share-section");
    share = document.getElementById("share-icon");
    section = document.getElementById("share-icon-and-section");
    visibility = element.style.visibility;


    if (visibility == 'visible')
    {
        element.style.visibility = 'hidden';
        share.style.background = '#ECF2F8';
        share.style.color = '#708298';
    }
    else
    {
        element.style.visibility = 'visible';
        share.style.background = '#708298';
        share.style.color = '#fff';
    }


}