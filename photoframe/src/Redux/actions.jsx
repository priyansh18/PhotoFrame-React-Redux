import { database } from "../database/config";

export function startAddingPhoto(photo) {
  return (dispatch) => {
    console.log(database)
    return database
      .ref("allPhotos")
      .set({ [photo.id]: photo })
      .then(() => {
        dispatch(addPhoto(photo));
      });
  };
}

export function removePhoto(index) {
  return {
    type: "REMOVE_PHOTO",
    index,
  };
}
export function addPhoto(photo) {
  return {
    type: "ADD_PHOTO",
    photo,
  };
}

export function addComment(comment, photoId) {
  return {
    type: "ADD_COMMENT",
    comment,
    photoId,
  };
}
