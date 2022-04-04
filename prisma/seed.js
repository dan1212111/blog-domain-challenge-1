/** @format */

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function seed() {
  const createdUsers = await prisma.user.create({
    data: {
      username: "alicemar",
      email: "alice@yahoo.com",
      firstName: "alice",
      lastName: "alicemartino",
      age: 36,
    },
  })

  console.log(`${createdUsers.count} users created`, createdUsers)

  // Add your code here

  const createdProfile = await prisma.profile.create({
    data: {
      hobbies: ["badmington", "chess"],
      status: true,
      biography:
        "Lorem ipsum dolor sit amet consectetur adipisiciconsequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu",
      image:
        "https://www.google.com/search?q=potato&sxsrf=APq-WBs7uI5pz2q2F1yIyhAPHqTHBzL_gA:1648823861465&tbm=isch&source=iu&ictx=1&vet=1&fir=1g4Mx02tPgOoZM%252CcPvdHSiO5UxhJM%252C%252Fg%252F120j31xn%253BbyLbzLsR3abTWM%252CcuZWkXgk0t6PjM%252C_%253BhVA5Vk6tlrllEM%252CMVIBc3JIcfYynM%252C_%253BXuIqyqgWoJZ9qM%252Cnc6e0zOKMwQCkM%252C_%253B1CeaBPMDK9eX9M%252CD83Ugcq3LvI-CM%252C_&usg=AI4_-kTNOxgaf9QxIFec2nWn5K_wNBIc_Q&sa=X&ved=2ahUKEwj26LzEi_P2AhX9QEEAHUjbArEQ_B16BAgvEAE#imgrc=1g4Mx02tPgOoZM",
      userId: createdUsers.id,
    },
  })

  console.log(`${createdProfile.count} profile created`, createdProfile)

  const createdPost = await prisma.post.create({
    data: {
      title: "This is my title",
      content:
        "dolor sit amet consectetur adipisiciconsequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praes",
      published: false,
      image: "https://image_image.co.uk",
      userId: createdUsers.id,
    },
  })
  console.log(`${createdPost.count} post created`, createdPost)

  const createdComment = await prisma.comment.create({
    data: {
      content:
        "dolor sit amet consectetur adipisiciconsequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praes",
      postId: createdPost.id,
      userId: createdUsers.id,
    },
  })
  console.log(`${createdPost.count} post created`, createdPost)

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
