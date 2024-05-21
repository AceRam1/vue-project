<template>
  <link rel="stylesheet" href="@/styles/styles.css">
  <v-container>
    <v-responsive>
      
      <h2>Dashboard</h2>

      <v-container>
          <v-row > <!-- class="bg-green" -->
            <v-col cols="7" style="margin-top: 1%;">

              <v-row no-gutters>
                  <v-col
                    cols="6"
                  >
                    <v-sheet class="pa-2 ma-2">
                      <br><h3>Overview</h3>
                    </v-sheet>
                  </v-col>

                </v-row>

              <v-row  no-gutters>
                  <v-col
                    cols="6"
                  >
                  <v-sheet class="pa-2 ma-2" style="background-color: #9EFFAD; border-left: 20px solid #00C11F; font-weight: bold;">
                    400<br>
                      Enrolled Students
                    </v-sheet>
                  </v-col>
        
                  <v-col
                    cols="6"
                  >
                  <v-sheet class="pa-2 ma-2" style="background-color: #D9D9D9; border-left: 20px solid #000000; font-weight: bold;">
                    200<br>
                      Vacant Slots
                    </v-sheet>
                  </v-col>
                </v-row>
      
              <v-row no-gutters>
                <v-col
                  cols="6"
                >
                <v-sheet class="pa-2 ma-2" style="background-color: #99DAFF; border-left: 20px solid #0083CD; font-weight: bold;">
                  48 <br>
                    New Enrollees
                  </v-sheet>
                </v-col>
      
                <v-col
                  cols="6"
                >
                <v-sheet class="pa-2 ma-2" style="background-color: #F8FFAB; border-left: 20px solid #D3E500; font-weight: bold;">
                  24 <br>
                    Re-enrollees
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
      
            <v-col cols="5">
              <v-sheet class="pa-2 ma-2">
                  <v-img
                  :width="500"
                  aspect-ratio="16/9"
                  cover
                  src="@/assets/line-graph.png"
                ></v-img>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container><hr>

        <v-container>
          <v-row > <!-- class="bg-green" -->
            <v-col cols="7" style="margin-top: 2%;">

              <v-row no-gutters>
                  <v-col
                    cols="6"
                  >
                    <v-sheet class="pa-2 ma-2">
                      <br>
                      <h3>Enrollees Breakdown</h3>
                    </v-sheet>
                  </v-col>

                </v-row>

              <v-row no-gutters>
                  <v-col
                    cols="6"
                  >
                  <v-sheet class="pa-2 ma-2" style="background-color: #FFA4A4; border-left: 20px solid #EA0000; font-weight: bold;">
                    156<br>
                      Reading and Math
                    </v-sheet>
                  </v-col>
        
                  <v-col
                    cols="6"
                  >
                  <v-sheet class="pa-2 ma-2" style="background-color: #FFE090; border-left: 20px solid #F3AF00; font-weight: bold;">
                    84<br>
                      Academic Assistance
                    </v-sheet>
                  </v-col>
                </v-row>
      
              <v-row no-gutters>
                <v-col
                  cols="6"
                >
                <v-sheet class="pa-2 ma-2" style="background-color: #ABAAFF; border-left: 20px solid #0500F3; font-weight: bold;">
                  48 <br>
                    English Conversation Class
                  </v-sheet>
                </v-col>
      
                <v-col
                  cols="6"
                >
                <v-sheet class="pa-2 ma-2" style="background-color: #B9FF8F; border-left: 20px solid #5CF300; font-weight: bold;">
                  108 <br>
                      Science Class
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
      
            <v-col cols="5">
              <v-sheet class="pa-2 ma-2">
                  <v-img
                  :width="500"
                  aspect-ratio="16/9"
                  cover
                  src="@/assets/pie-graph.png"
                ></v-img>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>

        <hr><br>

        <h3>Tutors with Vacant Slots</h3>


        <v-container style="background-color: #696969; text-align: center; padding: 1px;">
          <v-row no-gutters>
            <v-col cols="6">
              <v-sheet class="pa-2 ma-2" style="font-weight: bold; background-color: #E66E00; color: #ffffff">
                Tutor name
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2" style="font-weight: bold; background-color: #E66E00; color: #ffffff">
                Total Slots
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2" style="font-weight: bold; background-color: #E66E00; color: #ffffff">
                Occupied Slots
              </v-sheet>
            </v-col>

            <v-col cols="2">
              <v-sheet class="pa-2 ma-2" style="font-weight: bold; background-color: #E66E00; color: #ffffff">
                Open Slots
              </v-sheet>
            </v-col>
          </v-row>


          <v-row no-gutters>
            <v-col cols="6">
              <v-sheet class="pa-2 ma-2">
             Emily Williams
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
               5
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
              3
              </v-sheet>
            </v-col>

            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
             2
              </v-sheet>
            </v-col>
          </v-row>


          <v-row no-gutters>
            <v-col cols="6">
              <v-sheet class="pa-2 ma-2">
             .
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
         .
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
             .
              </v-sheet>
            </v-col>

            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
             .
              </v-sheet>
            </v-col>
          </v-row>

          
          <v-row no-gutters>
            <v-col cols="6">
              <v-sheet class="pa-2 ma-2">
             .
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
         .
              </v-sheet>
            </v-col>
      
            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
  .
              </v-sheet>
            </v-col>

            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
          .
              </v-sheet>
            </v-col>
          </v-row>
      

        </v-container>

      </v-responsive>
      </v-container>
</template>

<script setup>
  //
</script>
