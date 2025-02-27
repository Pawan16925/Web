async function fetchVideo() {
    let url = document.getElementById("videoUrl").value;
    
    if (!url) {
        alert("Please enter a valid URL!");
        return;
    }

    let resultDiv = document.getElementById("result");

    // Fake fetching logic (since Terabox blocks direct access)
    let fakeVideoUrl = "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"; // Replace this dynamically

    resultDiv.innerHTML = `
        <video controls width="600">
            <source src="${fakeVideoUrl}" type="video/mp4">
            Your browser does not support video playback.
        </video>
        <br>
        <a href="${fakeVideoUrl}" download>Download Video</a>
    `;
}
