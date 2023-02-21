resize_canvas(1000, 1000)

const GAP = 50
const X0 = GAP
const Y0 = HEIGHT - GAP
const G = 1
const TIME = 60
const DELTA_TIME = 0.1

const create_point = (x, y) => {
    return {'x': x, 'y': y}
}

const compute_velocity = (target_t, target_x, target_y) => {
    const time = TIME - target_t
    const v0x = (target_x - X0) / time
    const v0y = (target_y - Y0 - 0.5 * G * time * time) / time
    return create_point(v0x, v0y)
}

const update_point = (time, point, velocity) => {
    if (point.y > HEIGHT - 10) {
        return;
    }
    point.x = velocity.x * time + X0
    point.y = 0.5 * G * time * time + velocity.y * time + Y0
}

const target_points = [
    create_point(520.0, 632.5),
    create_point(534.9598177630069, 631.5140597880135),
    create_point(549.3232701340428, 628.6402400700388),
    create_point(562.9643557361303, 624.0045422230532),
    create_point(575.7570731922923, 617.7329676240342),
    create_point(587.5754211255514, 609.9515176499588),
    create_point(598.2933981589304, 600.7861936778044),
    create_point(607.7850029154519, 590.3629970845482),
    create_point(615.9242340181387, 578.8079292471674),
    create_point(622.5850900900135, 566.2469915426395),
    create_point(627.641569754099, 552.8061853479418),
    create_point(630.967671633418, 538.6115120400514),
    create_point(632.4373943509931, 523.7889729959455),
    create_point(631.9424554734846, 508.72914935103574),
    create_point(629.5287930029154, 494.2047930029155),
    create_point(625.3217520590911, 480.3713030794992),
    create_point(619.4473340189887, 467.35468095776423),
    create_point(612.0315402595857, 455.2809280146878),
    create_point(603.2003721578594, 444.2760456272472),
    create_point(593.079831090787, 434.46603517241965),
    create_point(581.7959184353458, 425.9768980271826),
    create_point(569.4746355685131, 418.9346355685131),
    create_point(556.2419838672663, 413.46524917338866),
    create_point(542.2239647085823, 409.6947402187864),
    create_point(527.5465794694387, 407.7491100816836),
    create_point(512.4534205305613, 407.7491100816836),
    create_point(497.77603529141777, 409.69474021878636),
    create_point(483.7580161327338, 413.46524917338866),
    create_point(470.5253644314869, 418.9346355685131),
    create_point(458.2040815646542, 425.97689802718253),
    create_point(446.92016890921303, 434.4660351724196),
    create_point(436.79962784214064, 444.27604562724713),
    create_point(427.9684597404143, 455.28092801468773),
    create_point(420.55266598101133, 467.3546809577642),
    create_point(414.678247940909, 480.37130307949917),
    create_point(410.47120699708455, 494.2047930029154),
    create_point(408.0575445265153, 508.72914935103563),
    create_point(407.5626056490068, 523.7889729959455),
    create_point(409.03232836658196, 538.6115120400514),
    create_point(412.35843024590093, 552.8061853479417),
    create_point(417.4149099099865, 566.2469915426395),
    create_point(424.07576598186125, 578.8079292471673),
    create_point(432.2149970845481, 590.362997084548),
    create_point(441.70660184106964, 600.7861936778042),
    create_point(452.4245788744485, 609.9515176499588),
    create_point(464.2429268077076, 617.7329676240342),
    create_point(477.0356442638696, 624.0045422230532),
    create_point(490.6767298659572, 628.6402400700388),
    create_point(505.0401822369931, 631.5140597880135),
    create_point(520.0, 632.5),
    create_point(519.982, 587.542),
    create_point(534.133774141143, 586.0422901670997),
    create_point(547.6115085110737, 581.6301918124849),
    create_point(559.9348111515269, 574.4530250247108),
    create_point(570.4317401953774, 564.8973215243182),
    create_point(578.7029835313729, 553.3512245835585),
    create_point(569.6556297436316, 550.2041450017832),
    create_point(555.4117400272106, 550.1777518489428),
    create_point(541.1678503107896, 550.1513586961022),
    create_point(526.9239605943685, 550.1249655432616),
    create_point(512.6800708779474, 550.098572390421),
    create_point(498.4361811615263, 550.0721792375805),
    create_point(484.1922914451053, 550.04578608474),
    create_point(469.9484017286842, 550.0193929318995),
    create_point(461.26213218119045, 553.3516636896147),
    create_point(469.5330131173671, 564.8971998037322),
    create_point(480.02954238824657, 574.4526680233805),
    create_point(492.35264135091086, 581.6299494000824),
    create_point(505.83055313196235, 586.0422282057287),
    create_point(519.982, 587.5419999999999),
    create_point(587.5, 505.005),
    create_point(586.3557441135409, 502.33040542127327),
    create_point(584.8852156125924, 499.8395839179669),
    create_point(583.110293512018, 497.561363985484),
    create_point(581.0528568266807, 495.5245741192277),
    create_point(578.735944821434, 493.75891157770553),
    create_point(576.2181294869379, 492.31133913230747),
    create_point(573.5479868526304, 491.20456932063775),
    create_point(570.7599000639696, 490.449561770311),
    create_point(567.8882522664129, 490.057276108942),
    create_point(564.9735476838017, 490.0383395855455),
    create_point(562.0954053514977, 490.3935771005007),
    create_point(559.2973695900653, 491.1126376065338),
    create_point(556.6138235449622, 492.1845614760301),
    create_point(554.0791503616464, 493.59838908137493),
    create_point(551.7383083345565, 495.33462330923567),
    create_point(549.6534944222273, 497.34598099207994),
    create_point(547.8491822146352, 499.60173997636537),
    create_point(546.3471059833647, 502.073034799777),
    create_point(545.1690000000001, 504.731),
    create_point(452.5004, 505.005),
    create_point(453.64588877477433, 502.32811424731335),
    create_point(455.1181488662321, 499.83535274965124),
    create_point(456.8953149209584, 497.555620653264),
    create_point(458.9555215855386, 495.51782310440194),
    create_point(461.27557534171666, 493.7517505912819),
    create_point(463.7963808319574, 492.3044772637335),
    create_point(466.46973502066226, 491.1987003565862),
    create_point(469.2610868141263, 490.4454101345736),
    create_point(472.1358851186444, 490.05559686242935),
    create_point(475.05323546733257, 490.03989785742317),
    create_point(477.9334156312271, 490.3989978676007),
    create_point(480.7330217629151, 491.12248852673946),
    create_point(483.4175027686915, 492.19937957010575),
    create_point(485.95230755485125, 493.618680732966),
    create_point(488.29207309169817, 495.3603739725505),
    create_point(490.3750007520738, 497.37708593515447),
    create_point(492.17665799906774, 499.6382121948689),
    create_point(493.6751545194524, 502.1148258502865),
    create_point(494.84860000000003, 504.7779999999999),
]

const points = target_points.map(_ => create_point(X0, Y0))
const velocities = target_points.map((p, i) => compute_velocity(i * DELTA_TIME, p.x, p.y))

let t = 0

const update = () => {
    clear_canvas()

    for (let i=0; i<points.length; i++) {
        const time = i * DELTA_TIME
        if (t <= time) {
            continue;
        }
        update_point(t - time, points[i], velocities[i])
        draw_rectangle(points[i].x, points[i].y, 3, 3, 'yellow')
    }

    t += 0.3

    requestAnimationFrame(update)
}

update()