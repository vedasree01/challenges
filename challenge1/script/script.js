function showShareSection()
{
    element = document.getElementById("share-section");
    visibility = element.style.visibility;

    if (visibility == 'hidden')
    {
        element.style.visibility = 'visible';
    }
    else
    {
        element.style.visibility = 'hidden';
    }

}