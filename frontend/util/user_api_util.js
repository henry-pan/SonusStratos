export const fetchUser = userId => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
);

export const updateUser = (user, formData) => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: formData,
    contentType: false,
    processData: false
  })
);
