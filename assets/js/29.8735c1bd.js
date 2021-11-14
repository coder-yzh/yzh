(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{386:function(t,a,r){"use strict";r.r(a);var s=r(44),C=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"dagan摘要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dagan摘要"}},[t._v("#")]),t._v(" DAGAN摘要")]),t._v(" "),r("p",[t._v("基于压缩感知[11]的MRI\n(CS-MRI)允许快速采集，绕过Nyquist-Shannon采样标准，具有更强的不充分采样。理论上，它可以在不降低图像质量的情况下，通过对随机未充分采样的原始数据进行非线性优化来实现重建，假设数据是可压缩的。CS-MRI的主要挑战是找到一种算法，可以从随机高度不充分采样的k空间数据中重建未损坏或去混叠的图像。")]),t._v(" "),r("h3",{attrs:{id:"相关工作及我们的贡献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关工作及我们的贡献"}},[t._v("#")]),t._v(" 相关工作及我们的贡献")]),t._v(" "),r("h4",{attrs:{id:"a-经典的基于cs-mri模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-经典的基于cs-mri模型"}},[t._v("#")]),t._v(" A.经典的基于CS-MRI模型")]),t._v(" "),r("p",[t._v("​\tCS-MRI的研究主要集中在三个方向。首先，研究人员寻求了最佳的欠采样方案，该方案应尽可能随机，以产生非相干的欠采样伪影，以便在不降低重建[12]-[14]图像质量的情况下，应用适当的非线性重建来抑制类噪声伪影。随机欠采样的稀疏性决定了加速速率。更重要的是，随机欠采样方案必须在核磁共振扫描仪上可行并与特定的扫描序列兼容。目前，大多数使用2D MRI的研究都依赖于一维随机欠采样来产生遵循一维高斯分布的采样模式。这使得高频区域有较高水平的欠采样，而低频区域则保留了整体图像结构。由于沿频率编码方向的采样速度快，且只有相位编码方向限制了采集时间[2]，所以只使用了1D欠采样。考虑到三维重建，常用二维高斯和泊松盘掩模对编码[1]的相位和切片进行加速。")]),t._v(" "),r("p",[t._v("​\t其次，一般来说，通过MRI获得的医学图像自然是可压缩的。CS-MRI利用隐式稀疏重建加速病变[15]。这里，术语稀疏性描述的是一个矩阵的图像像素或原始数据点，主要是零值或可压缩。这种稀疏性可能存在于图像域，也可能更普遍地存在于变换域的合适的数学表示。稀疏表示可以在特定的变换域或基于字典的子空间[16]中进行研究。经典的快速CS-MRI使用预定义的和固定的稀疏化变换，如总变差(TV)[17]\n-[19]、离散余弦变换[20]-[22]和离散小波变换[23]-[25]。此外，这已经被扩展为一种更灵活的稀疏表示，使用字典学习[26]-[28]直接从数据学习。")]),t._v(" "),r("p",[t._v("​\t最后，采用非线性优化算法保证了[16]、[18]、[29]、[30]的高效、稳定、准确重建。对经典的CS-MRI方法和临床应用的综合评论可在其他方面找到，如[1]，[31]")]),t._v(" "),r("p",[t._v("​\t尽管在临床环境[31]-[33]中应用快速CS-MRI有前景的研究，但大多数常规的临床MRI扫描仍基于标准的完全采样笛卡尔序列，或仅使用并行成像加速。主要的挑战是:(1)满足CS-MRI[1]要求的非一致性标准;(2)应用广泛的稀疏化变换可能过于简单，无法捕捉与生物组织细微差异相关的复杂图像细节，例如:基于TV的稀疏变换惩罚了重构图像的局部变化，但会引入阶梯伪影;小波变换增强了点的奇点性和各向同性特征，而正交小波可能导致块状伪影[34]-\n[36];(3)非线性优化求解通常涉及迭代计算，可能导致较长的重建时间[1];(4)当前CS-MRI方法中预测的不恰当的超参数会导致过度正则化，这将产生过于平滑和不自然的重建图像或残留的未充分采样伪影[1]。由于这些挑战和限制，仅使用CS-MRI的加速速度仍然有限(2×到6×加速)。")]),t._v(" "),r("h4",{attrs:{id:"b-基于深度学习的cs-mri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-基于深度学习的cs-mri"}},[t._v("#")]),t._v(" B.基于深度学习的CS-MRI")]),t._v(" "),r("p",[t._v("​\t近年来，深度学习在计算机视觉研究中受到了广泛的关注，并在性能上取得了普遍的回报。Shen等人[37]对深度学习在医学图像分析中的最新研究进行了综述，Wang[38]对深度成像提供了一个很有见地的视角，提出将深度学习融入到层析图像重建中。本质上，CS-MRI重建解决了类似于图像超分辨率（SR）[39]，去噪和修复[40]，[41]的广义逆问题，这些问题已使用深度神经网络架构成功解决，例如 ，使用卷积神经网络（CNN）。")]),t._v(" "),r("p",[t._v("​\t目前，基于深度学习的CS-MRI重建还只是初步研究。Wang等人[42]介绍了一种基于cnn的CS-MRI方法，其中学习到的网络用于在两阶段重建中初始化经典的CS-MRI，或作为额外的正则化项直接集成到CS-MRI中。尽管初步的定性可视化显示出了一些希望，但这种方法在CS-MRI重建中的适用性还有待于详细的定量评估。在[36]中，使用乘数[18]框架的交替方向法，即ADMM-Net，训练一个深度网络来求解CS-MRI。重构、去噪和拉格朗日乘子更新在数据流图中实现，并通过级联深度网络层进行优化。该方法与经典CS-MRI重建方法取得了相似的重建效果，但大大缩短了重建时间。还有三个预印本描述基于深度学习的CS-MRI:\nSchlemper等。[43]提出了级联CNN将一层数据一致性,Hammernik等。[44]训练变分网络解决CS-MRI和李et al。[45]结合基于CNN\nCS-MRI并行成像估计和消除混叠的文物。虽然深度学习在解决CS-MRI的快速重建方面显示出了巨大的潜力，但迄今为止并没有发现与经典CS-MRI所能实现的显著不同的改进。此外，与其他深度学习应用一样，网络结构的定义并不简单，除非进行全面的参数调优，否则很难实现深度网络训练的收敛性。")]),t._v(" "),r("h4",{attrs:{id:"c-我们的贡献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-我们的贡献"}},[t._v("#")]),t._v(" C.我们的贡献")]),t._v(" "),r("p",[t._v("​\t在本研究中，我们提出了一种基于条件生成对抗网络(GAN)的新型深度学习体系结构(DAGAN)，通过在方法和模拟设置中全面扩展我们最初的概念证明研究[46]，用于去混叠和快速CS-MRI。我们的主要贡献有:•设计了一种细化学习方法来稳定GAN的训练，以快速收敛和更少的参数调整;•对抗损失与新颖的内容损失相结合，考虑到像素均方误差(MSE)和感知损失，由牛津大学视觉几何组(简称VGG网络[49])的预训练深度卷积网络定义，以实现更好的重建细节;•CS-MRI的频域信息已作为数据一致性的附加约束被纳入，这是作为额外的损失项形成的;•我们进行了全面的实验，并将我们提出的模型与经典的CS-MRI和最新开发的基于深度学习的方法进行了比较。")])])}),[],!1,null,null,null);a.default=C.exports}}]);