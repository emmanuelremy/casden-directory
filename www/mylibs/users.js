var users =
[
  {
    "dn":"uid=ABDI,dc=casdenbp,dc=fr",
    "sn":"ABUDIV",
    "businessCategory":"Entité Production et Opérations Techniques // Domaine Opérations Techniques",
    "telephoneNumber":164804295,
    "givenName":"Lionnel",
    "nomResp1":"BOUVOIR",
    "roomNumber":"xxxx",
    "secretaire1":"MARC"
  },
]
;

var pics=["steven_wells.jpg","ray_moore.jpg",
          "paula_gates.jpg","paul_jones.jpg",
          "lisa_wong.jpg","john_williams.jpg",
          "james_king.jpg","kathleen_byrne.jpg",
          "eugene_lee.jpg","gary_donovan.jpg"];
var cpt=0;

_.each(users,function(user) { user.picture = "pics/" + pics[cpt++ % pics.length]; });

console.log("users chargés");
