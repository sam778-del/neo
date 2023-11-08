<template>
	<vs-row>

		<!-- HORIZONTAL LAYOUT -->
		<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
			<vs-card code-toggler>
            <div slot="header">
                  <h3>
                     Form 1
                  </h3>
                  </div>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>First Name</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input class="w-full" v-model="input1" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>Email</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input class="w-full" type="email" v-model="input2" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>Mobile</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input class="w-full" v-model="input3" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>Password</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input class="w-full" type="password" v-model="input4" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<vs-checkbox class="inline-flex" v-model="check1">Remember Me</vs-checkbox>
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button>
					</vs-col>
				</vs-row>


			</vs-card>
		</vs-col>

		<!-- HORIZONTAL LAYOUT WITH ICON-->
		<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
			<vs-card code-toggler>

             <div slot="header">
               <h3>
                  Form 2
               </h3>
               </div>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>First Name</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border v-model="input5" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>Email</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border v-model="input6" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>Mobile</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border v-model="input7" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<span>Password</span>
					</vs-col>
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border v-model="input8" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="4" vs-lg="4">
						<vs-checkbox class="inline-flex" v-model="check2">Remember Me</vs-checkbox>
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col vs-xs="12" vs-sm="8" vs-lg="8">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input5 = input6 = input7 = input8 = ''; check2 = false;">Reset</vs-button>
					</vs-col>
				</vs-row>

     
			</vs-card>
		</vs-col>

		<!-- VERTICAL LAYOUT -->
		<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
			<vs-card code-toggler>
             <div slot="header">
               <h3>
                  Form 3
               </h3>
               </div>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input class="w-full" label="First Name" v-model="input9" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input class="w-full" type="email" label="Email" v-model="input10" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input class="w-full" label="Mobile" v-model="input11" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input class="w-full" type="password" label="Password" v-model="input12" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-checkbox class="inline-flex" v-model="check3">Remember Me</vs-checkbox>
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input9 = input10 = input11 = input12 = ''; check3 = false;">Reset</vs-button>
					</vs-col>
				</vs-row>

        <!-- CODE -->
            <template slot="codeContainer">
                  &lt;template&gt;
                  &lt;div class=&quot;vx-row mb-6&quot;&gt;
                     &lt;div class=&quot;vx-col w-full&quot;&gt;
                        &lt;vs-input class=&quot;w-full&quot; label=&quot;First Name&quot; v-model=&quot;input9&quot; /&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;vx-row mb-6&quot;&gt;
                     &lt;div class=&quot;vx-col w-full&quot;&gt;
                        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; label=&quot;Email&quot; v-model=&quot;input10&quot; /&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;vx-row mb-6&quot;&gt;
                     &lt;div class=&quot;vx-col w-full&quot;&gt;
                        &lt;vs-input class=&quot;w-full&quot; label=&quot;Mobile&quot; v-model=&quot;input11&quot; /&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;vx-row mb-6&quot;&gt;
                     &lt;div class=&quot;vx-col w-full&quot;&gt;
                        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; label=&quot;Password&quot; v-model=&quot;input12&quot; /&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;vx-row mb-6&quot;&gt;
                     &lt;div class=&quot;vx-col w-full&quot;&gt;
                        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check3&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;vx-row&quot;&gt;
                     &lt;div class=&quot;vx-col w-full&quot;&gt;
                        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
                        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input9 = input10 = input11 = input12 = ''; check3 = false;&quot;&gt;Reset&lt;/vs-button&gt;
                     &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;/template&gt;
            </template>
               </vs-card>
		</vs-col>

		<!-- VERTICAL LAYOUT WITH ICON-->
		<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
			<vs-card code-toggler>
             <div slot="header">
               <h3>
                  Form 4
               </h3>
               </div>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="First Name" v-model="input13" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label="Email" v-model="input14" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label="Mobile" v-model="input15" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
						<vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label="Password" v-model="input16" />
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
					
						<vs-checkbox class="inline-flex" v-model="check4">Remember Me</vs-checkbox>
					</vs-col>
				</vs-row>
				<vs-row class="mb-6">
					<vs-col>
					
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input13 = input14 = input15 = input16 = ''; check4 = false;">Cancle</vs-button>
					</vs-col>
				</vs-row>

        <!-- CODE -->
        <template slot="codeContainer">
            &lt;template&gt;
               &lt;div class=&quot;vx-row mb-6&quot;&gt;
                  &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; icon-no-border label=&quot;First Name&quot; v-model=&quot;input13&quot; /&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-row mb-6&quot;&gt;
                  &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; icon-no-border label=&quot;Email&quot; v-model=&quot;input14&quot; /&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-row mb-6&quot;&gt;
                  &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-smartphone&quot; icon-no-border label=&quot;Mobile&quot; v-model=&quot;input15&quot; /&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-row mb-6&quot;&gt;
                  &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-input type=&quot;password&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot; icon-no-border label=&quot;Password&quot; v-model=&quot;input16&quot; /&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-row mb-6&quot;&gt;
                  &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check4&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-row&quot;&gt;
                  &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
                  &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input13 = input14 = input15 = input16 = ''; check4 = false;&quot;&gt;Cancle&lt;/vs-button&gt;
                  &lt;/div&gt;
               &lt;/div&gt;
            &lt;/template&gt;
        </template>
			</vs-card>
		</vs-col>

	

		<!-- MULTIPLE COLUMNS-->
		<div class="vx-col w-full mb-base">
			<vs-card code-toggler>
             <div slot="header">
               <h3>
                  Form 5
               </h3>
            </div>
				<vs-row>

            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                              <vs-input class="w-full" label-placeholder="First Name" v-model="input25" />
            </vs-col>
					<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
						<vs-input class="w-full" label-placeholder="Last Name" v-model="input26" />
					</vs-col>
				</vs-row>
						<vs-row>

            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                              <vs-input class="w-full" label-placeholder="City" v-model="input27" />
            </vs-col>
					<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
						<vs-input class="w-full" label-placeholder="Country" v-model="input28" />
					</vs-col>
						</vs-row>
				<vs-row>
					<vs-col vs-xs="12" vs-sm="6" vs-lg="6" class="mb-6">
						<vs-input class="w-full" label-placeholder="Company" v-model="input29" />
					</vs-col>
					<vs-col vs-xs="12" vs-sm="6" vs-lg="6" class="mb-6">
						<vs-input type="email" class="w-full" label-placeholder="Email" v-model="input30" />
					</vs-col>
				</vs-row>
				<vs-row>
					<vs-col vs-xs="12" vs-sm="6" vs-lg="6" class="mb-6">
						<vs-checkbox class="inline-flex" v-model="check7">Remember Me</vs-checkbox>
					</vs-col>
				</vs-row>
				<vs-row>
					<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;">Reset</vs-button>
					</vs-col>
				</vs-row>
        <template slot="codeContainer">
            &lt;template&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
               &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;First Name&quot; v-model=&quot;input25&quot; /&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Last Name&quot; v-model=&quot;input26&quot; /&gt;
               &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
               &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;City&quot; v-model=&quot;input27&quot; /&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Country&quot; v-model=&quot;input28&quot; /&gt;
               &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
               &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
                  &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Company&quot; v-model=&quot;input29&quot; /&gt;
               &lt;/div&gt;
               &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-6&quot;&gt;
                  &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; label-placeholder=&quot;Email&quot; v-model=&quot;input30&quot; /&gt;
               &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
               &lt;div class=&quot;vx-col w-full mb-6&quot;&gt;
                  &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check7&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
               &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
               &lt;div class=&quot;vx-col w-full&quot;&gt;
                  &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
                  &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;&quot;&gt;Reset&lt;/vs-button&gt;
               &lt;/div&gt;
            &lt;/div&gt;
            &lt;/template&gt;
        </template>
			</vs-card>
		</div>
	</vs-row>
</template>

<script>
export default{
	data() {
		return {
			check1: '',
			check2: '',
			check3: '',
			check4: '',
			check5: '',
			check6: '',
			check7: '',
			input1: '',
			input2: '',
			input3: '',
			input4: '',
			input5: '',
			input6: '',
			input7: '',
			input8: '',
			input9: '',
			input10: '',
			input11: '',
			input12: '',
			input13: '',
			input14: '',
			input15: '',
			input16: '',
			input17: '',
			input18: '',
			input19: '',
			input20: '',
			input21: '',
			input22: '',
			input23: '',
			input24: '',
			input25: '',
			input26: '',
			input27: '',
			input28: '',
			input29: '',
			input30: '',
		}
	}
}
</script>
