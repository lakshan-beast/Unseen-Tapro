// src/imgbb.ts

// Step 1 එකෙන් ලබාගත් API Key එක මෙතනට Paste කරන්න
const IMGBB_API_KEY = "976fcddf394f0cfbc94f30913118ae4e";

export async function uploadImageToImgBB(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (data.success) {
      // Photo එක Upload වූ පසු ලැබෙන Direct Public Link එක Return කරයි
      return data.data.url;
    } else {
      throw new Error("ImgBB Upload Failed");
    }
  } catch (error) {
    console.error("Error uploading to ImgBB:", error);
    throw error;
  }
}
